// Reject promise
export default function uploadPicture(filename){
	return Promise.reject{
		new Error('${filename} cannot be processed')
	}
}
