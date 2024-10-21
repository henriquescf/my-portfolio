export const contactUsSheet = async (data: any) => {
    const sheet_url = "https://script.google.com/macros/s/AKfycbxQSw6_vr6S6QMrm0_jQnuEYr90RsNBUVSlE229tpiceLjkmZINhvhqFlBVzon8I38_/exec"
    
    const formData = new FormData();
    formData.append('Name', data.name);
    formData.append('Email', data.email);
    formData.append('Message', data.message);
    try {
      await fetch(sheet_url, {
        method: 'POST',
        body: formData,
        mode: "no-cors",
      })
    } catch (error) {
      console.log(error);
    }
  }