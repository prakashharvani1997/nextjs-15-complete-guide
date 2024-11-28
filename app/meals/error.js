
'use client';

export default async function Error() {
    // reserved filename same as page & layout & loading
    // this file will become active when page next to it / any nested page / layout getting Error 
  return <main className="error">
    <h1>An Error occured!</h1>
    <p> Failed to fetch the data, Please try again later!</p>
  </main>;
}
