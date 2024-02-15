import { db } from '@/firebase';
import { customerRequest } from '@/modules/Contacts/Components/ContactForm/ContactForm';
import { Review } from '@/modules/Reviews/components/AddReviewForm/AddReviewForm';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const getAllReviews = async () => {
  const querySnapshot = await getDocs(collection(db, 'reviews'));
  const arr: any = [];
  querySnapshot.forEach(doc => {
    arr.push(doc.data());
  });
  return arr;
};

export const setCustomerRequests = async (customerData: customerRequest) => {
  try {
    await setDoc(doc(db, 'customerRequests', customerData.email), customerData);
    return;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const setReview = async (customerData: Review) => {
  try {
    await setDoc(doc(db, 'reviews', customerData.owner), customerData);
    return;
  } catch (error: any) {
    toast.error(error.message);
  }
};
