import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export class Songs {
    static getSongs = async () => {
        const response = await axios.get(`${BASE_API_URL}/songs`);
        return response.data;
    }
};

