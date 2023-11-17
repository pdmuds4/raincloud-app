import axios from "axios";


//const Domain = "http://127.0.0.1:3001";

// docker用
const Domain = "http://0.0.0.0:3001";

// get methodでのレスポンスを返す関数
function getResponse(endpoint){
    axios.get(Domain + endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((e)=>{
            throw e;
        }
    );
};

// post methodでデータを送信し,レスポンスを返す関数
const postResponse = async (endpoint, data) => {
    try {
        const res = await axios.post(Domain + endpoint, data);
        return res.data;
    } catch (e) {
        throw e;
    }
}


export {getResponse, postResponse};