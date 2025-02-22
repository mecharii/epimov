import {
  collection,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
  Timestamp,
  query,
  where,
} from "firebase/firestore";
import { db } from "../FireBase";

export async function getAllData() {
  try {
    const collectionRef = collection(db, "FSPal");
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    throw new Error("Veriler getirilirken bir hata oluştu:");
  }
}

//Admin işlemleri

export async function addData(formData, setMessage) {
  try {
    const { id, created_at, updated_at, ...remainingData } = formData;
    remainingData.created_at = Timestamp.now();

    const docRef = collection(db, "FSPal");
    await addDoc(docRef, remainingData);

    setMessage("Veri başarıyla eklendi");
  } catch (error) {
    setMessage("Veri eklenirken bir hata oluştu: " + error.message);
  }
}

export async function deleteData(formData, setMessage) {
  try {
    const docRef = doc(db, "FSPal", formData.id);
    await deleteDoc(docRef, formData);

    setMessage("Veri başarıyla Silindi.");
  } catch (error) {
    setMessage("Veri silinirken bir hata oluştu: " + error.message);
  }
}

export async function updateData(formData, setMessage) {
  try {
    formData.updated_at = Timestamp.now();
    const docRef = doc(db, "FSPal", formData.id);
    await updateDoc(docRef, formData);

    setMessage("Veri başarıyla güncellendi.");
  } catch (error) {
    setMessage("Veri güncellenirken bir hata oluştu: " + error.message);
  }
}

//Arama Çubuğu
export async function getSearchResults(searchText, setMessage) {
  try {
    const fsData = await getAllData();
    const data = [];
    for (const res of fsData) {
      if (
        searchText.length > 2 &&
        res.title
          .trim()
          .toLocaleLowerCase("tr")
          .includes(searchText.trim().toLocaleLowerCase("tr"))
      ) {
        data.push(res);
      }
    }
    return data;
  } catch (error) {
    setMessage("Bir Hata Oluştu");
  }
}

//Yorum işlemleri

export async function addNewComment(id, comment, setMessage) {
  try {
    if (comment.trim().length < 3 || comment.trim().length > 200) {
      setMessage("Yorumunuz Çok uzun veya Kısa");
    } else {
      const commentRef = collection(db, "Comments");
      await addDoc(commentRef, {
        movieId: id,
        commentText: comment,
      });
      setMessage("Yorum Gönderildi");
    }
  } catch (error) {
    setMessage("Yorum Eklenemedi", error.message);
  }
}

export async function getComments(movieId, setMessage) {
  try {
    const q = query(
      collection(db, "Comments"),
      where("movieId", "==", movieId)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    setMessage("Yorumlar Getirilirken Bir Hata Oluştu");
  }
}
