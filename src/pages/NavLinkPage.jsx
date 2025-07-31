import React from 'react';
import JobCardVertical from '../components/Card/JobCardVertical.jsx';
import JobCardHorizontal from '../components/Card/JobCardHorizontal.jsx';
export default function NavLinkPage() {
  return (
    <>
      {/* <JobCardHorizontal featured={true} /> */}
      <JobCardVertical featured={false} />
      <JobCardHorizontal featured={true} />
  
    </>
  );
}
