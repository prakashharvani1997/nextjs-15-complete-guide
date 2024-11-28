
export default async function NotFound() {
    // reserved filename same as page & layout & loading
    // this file will become active when page next to it / any nested page / layout getting Error 
  return <main className="not-found">
    <h1>Not found!</h1>
    <p> We could not find the requested resource!</p>
  </main>;
}
