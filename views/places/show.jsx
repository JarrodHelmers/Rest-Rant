const React = require('react')
const Def = require('../default')
function show (data) {
    return (
        <Def>
          <main>
            <div className="container mt-5">
              <div className="row align-items-center">
                <div className="col">
                <img src={ data.place.pic } alt={ data.place.name } />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
                </div>
                <div className="col">
                  <h1>{ data.place.name }</h1>
                  <h2>Rating</h2>
                  <p>Not Rated</p>

                  <h2>Description</h2>
                  <h3>
                    {data.place.showEstablished()}
                  </h3>
                  <h4>
                    Serving {data.place.cuisines}
                  </h4>
                </div>
              </div>

              <div className="row justify-content-center mt-5 border-top">
                <div className="col pt-3">
                <h2>Comments</h2>
                <p>No Comments Yet!</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col text-right">
                  <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                  Edit
                  </a>
                  
                </div>
                <div className="col text-left">
                  <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">DELETE</button>
                  </form></div>
              </div>
            </div>
          </main>
        </Def>
    )
}
module.exports = show 