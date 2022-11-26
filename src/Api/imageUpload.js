export const getImageUrl= async image =>{
    const formData=new FormData();
    formData.append('image',image);
    // const imageHostKey=process.env.REACT_APP_imagebb_key
    // const url=`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imabb_key}`
    const url=`https://api.imgbb.com/1/upload?key=4de667ac270f1c0267e74cf024279615`

    const response= await fetch(url,{
        method:'POST',
        body:formData,
    });

    const data=await response.json()
    return data;
}