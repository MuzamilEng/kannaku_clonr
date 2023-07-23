import React from 'react';

const Pagination = () => {
  
  return ( 

     <>   
      {/* Pagination */}
      <section className="comp-section">
        <div className="section-header">
        <h3 className="section-title">Pagination</h3>
        <div className="line" />
        </div>
        <div className="card bg-white">
        <div className="card-body">
            <div>
            <ul className="pagination mb-4">
                <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item active">
                <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    Next
                </a>
                </li>
            </ul>
            </div>
            <div>
            <ul className="pagination mb-4">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    2
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                </a>
                </li>
            </ul>
            </div>
            <div>
            <ul className="pagination pagination-lg mb-4">
                <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item active">
                <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    Next
                </a>
                </li>
            </ul>
            </div>
            <div>
            <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item active">
                <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    Next
                </a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </section>
    {/* /Pagination */}
   </>
  )
}

export default Pagination