import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from "../firebase";
import { songNames } from "../utils/constants";

export class FirebaseService {
    static getSongsFromStorage = async () => {
        const storage = getStorage(app);
        const result: string[] = [];

        for (let song of songNames) {
            const url = await getDownloadURL(ref(storage, `music/${song}`))
            result.push(url);
        }

        return result;

    }
};

