const callApi = (url, setLoading, setJobs) => {
  setLoading(true);
  fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        setLoading(false);
        setJobs(result);
      },
      (error) => {
        console.log("error", error);
      }
    );
};

export default callApi;
