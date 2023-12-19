export const fetchLocalStorage = () => {
  const data = localStorage.getItem("googleLogin");
  if (data) {
    const profileData = JSON.parse(data);

    return profileData;
  }
};
