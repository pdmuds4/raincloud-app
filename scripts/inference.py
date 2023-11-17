import torch, os  # PyTorchのインポート
import torchvision.transforms as transforms  # 画像の前処理用モジュールのインポート
from PIL import Image  # 画像処理ライブラリPILのインポート
import torch.nn as nn  # ニューラルネットワークモジュールのインポート

from scripts.model import OriginalCNN

# 自分の環境、条件に合わせて適切に値を代入すること
NUM_CLASSES = 3 # 分類したいクラス数　自分のタスクに合わせて正しい値を代入すること
MODEL_PATH = os.path.join(os.path.dirname(__file__), "Weights/weights.pth")
NUM_CANDIDATES = 3  # 上位3つの推論結果を表示

# モデル学習と同じ条件で前処理すること
# 画像の前処理（リサイズ、テンソルへの変換、正規化）の設定
transform = transforms.Compose([
    transforms.Resize([224, 224]),  # 画像を224x224にリサイズ
    transforms.ToTensor(),  # 画像をテンソルに変換
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # 画像の正規化
])

# モデル学習と同じモデルを読み込むこと
# 最後の全結合層をNUM_CLASSES分類用に変更し、重みデータのロード
model = OriginalCNN()
model.load_state_dict(torch.load(MODEL_PATH))  # 学習済みの重みをロード
model.eval()  # モデルを評価モードに設定

# クラス名のリスト例　自分のクラス名・クラス数に合わせて編集すること
class_names = [
    "sunny",  
    "cloudy",
    "rainy"   
]

# 画像を予測する関数
def predict(image_path):
    image = Image.open(image_path)  # 画像を開く
    tensor_image = transform(image).unsqueeze(0)  # 画像をテンソルに変換し、バッチ次元を追加
    outputs = model(tensor_image)  # モデルに画像を入力し、出力を取得
    probabilities = torch.nn.functional.softmax(outputs, dim=1)  # 出力をソフトマックス関数で確率に変換
    top_prob, top_classes = torch.topk(probabilities, NUM_CANDIDATES)  # 上位の確率とクラスのインデックスを取得
    top_prob_percent = [round(prob.item() * 100, 2) for prob in top_prob[0]]  # 確率をパーセンテージに変換
    # クラス名と確率を組み合わせてリストに格納
    predictions = [(class_names[class_idx], prob) for class_idx, prob in zip(top_classes[0], top_prob_percent)]
    results = {}
    for class_name, prob in predictions:  # クラス名と確率を文字列に変換
        results.update({class_name: prob})
    return results  # 予測結果のリストを返す

# デバッグ用のmainメソッド
if __name__ == "__main__":
    # image_path = "/Users/pam/Downloads/img/jsgame.jpg"  # ここに確認したい画像のパスを入れる
    # predictions = predict(image_path)
    #print(MODEL_PATH)
    pass