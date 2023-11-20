//import "../stylesheets/Loader.css"

/** Component to render placeholder html while content loads
 *
 * {CompanyDetail, JobList, CompanyList} -> Loader
 */
function Loader(){
  return (
    <div className="loader">
      <h1> Loading... </h1>
    </div>
  )
}

export default Loader
