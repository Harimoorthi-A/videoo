import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonrequest";

// enthokke cheyyanam enn nokk
//1) Add video http://localhost:5000/videos ,add il po
export const addVideo = async (body) => {
   return await commonRequest('POST', `${baseUrl}/videos`, body)
}

// Get all videos
export const getAllVideos = async() => {
  return await commonRequest('GET', `${baseUrl}/videos`, {})
}

// // delete  single video, url param aayit kodukkanam
export const deleteVideo = async (id) => {
   return await commonRequest('DELETE', `${baseUrl}/videos/${id}`)
}

// // add category
export const addCategory = async (body) => {
   return await commonRequest('POST', `${baseUrl}/categories`, body)
}

// // get all categories
export const getAllCat = async () => {
   return await commonRequest('GET', `${baseUrl}/categories`, {})
}

// // delete categories
export const deleteCat = async (id) => {
   return await commonRequest('DELETE', `${baseUrl}/categories/${id}`, {})
}

// // add history
export const addHistory = async (body) => {
   return await commonRequest('POST', `${baseUrl}/histories`, body)
}

// // get all  histories
export const getAllHistory = async () => {
   return await commonRequest('GET', `${baseUrl}/histories`, {})
}

// // delete history
export const deleteHistory = async (id) => {
   return await commonRequest('DELETE', `${baseUrl}/histories/${id}`, {})
}

// // drag and drop

// // access single video
export const getVideo = async (id) => {
   return await commonRequest('GET', `${baseUrl}/videos/${id}`,{})
}
// // update category
export const updateCategory=async(id,body)=>{
   return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}