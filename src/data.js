export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="} alt="avatar" />
            {params.row.Username}
          </div>
        );
      },
    },
    {
      field: "Email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "Name and surname",
      headerName: "Full Name",
      width: 100,
    },
    {
      field: "Country",
      headerName: "Country",
      width: 160,
     
    },
  ];
  
export const productsColumns =[

  { field: "id", headerName: "ID", width: 70 },
  { field: "Title", headerName: "Product", width:300 ,
  renderCell: (params) => {
    return (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img || "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="} alt="avatar" />
        {params.row.Title}
      </div>
    );
  },},
 
  { field: "Price", headerName: "Price", width: 150 },
  { field: "Category", headerName: "Category", width: 270 },

  { field: "Stock", headerName: "Stock", width:100 },
]