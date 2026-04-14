import React from 'react';

export const metadata = {
  title: "App details",
  description: "This is an application management website",
};

const AppDetails = async({params}) => {
 const {id} = await params;
 console.log(id);
 return (
  <div>
   This is app details
  </div>
 );
};

export default AppDetails;