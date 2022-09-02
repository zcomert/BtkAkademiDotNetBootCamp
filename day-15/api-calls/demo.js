import axios from "axios"; 

const getAllAuthors = async () => {
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiemNvbWVydCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Ik1hbmFnZXIiLCJleHAiOjE2NjIxMjEzOTksImlzcyI6ImJzdG9yZWFwaSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJ9.pVETDuraWn74-xSPRMZSrQoN4AHfQG2FCNC1TlfYurk";

  const { status, data } = await axios
    .get("http://localhost:44299/api/books",{
        headers:{
            'Authorization': `Bearer ${key}`
        }
    })
    .then((resp) => resp)
    .catch((err) => {
      return { status: err.response.status, data: [] };
    });

  return { status, data };
};

const result = await getAllAuthors();
console.log(result.data);
console.log(result.status);
