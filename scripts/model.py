import torch.nn as nn

INPUT_CHANNELS = 3 # MNISTのグレースケールの場合は1、カラーの場合は3
NUM_CLASSES = 3 # 分類するクラス数　MNISTの場合 10
FINAL_IMG_SIZE = 56 # MNIST 一辺の長さが28に対して2回MaxPool2dを通したら28→14→7

class OriginalCNN(nn.Module):
    def __init__(self):
        super().__init__()
        
        # 画像の特徴を抽出するための層（畳み込み層、ReLU、MaxPooling）を定義
        self.features = nn.Sequential(
            # 最初の畳み込み層（INPUT_CHANNELSから64チャネルに変換）
            nn.Conv2d(in_channels=INPUT_CHANNELS, out_channels=64, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),# ReLU活性化関数
            nn.MaxPool2d(kernel_size=2),# 最大プーリングを使用して画像サイズを半分にする
            
            # 2番目の畳み込み層（64チャネルから128チャネルに変換）
            nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),# ReLU活性化関数
            nn.MaxPool2d(kernel_size=2),# 最大プーリングを使用して画像サイズを半分にする
            
            # 3番目の畳み込み層（128チャネルから64チャネルに変換）
            nn.Conv2d(in_channels=128, out_channels=64, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True), # ReLU活性化関数
        )

        # 分類のための全結合層を定義
        self.classifier = nn.Sequential(
            # FINAL_IMG_SIZE*FINAL_IMG_SIZE*64の長さのベクトルから、NUM_CLASSESのベクトルに変換
            nn.Linear(in_features=FINAL_IMG_SIZE*FINAL_IMG_SIZE*64, out_features=56),
            nn.Dropout(0.4), # ドロップアウト（過学習を防ぐためにランダムにノードを無効化する）
            nn.Linear(in_features=56, out_features=NUM_CLASSES)
        )

    def forward(self, x):
        # 入力画像をfeaturesモジュールで処理
        output = self.features(x)
        # Flatten操作：2次元の特徴マップを1次元のベクトルに変換
        output = output.view(output.size(0), -1)
        # Flattenされたベクトルを分類層に通す
        output = self.classifier(output)
        return output