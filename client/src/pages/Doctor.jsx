import React from 'react'
import Report from '../Components/Report'

const Doctor = () => {
  return (
    <div style={{marginTop:'5%'}}>
        <div>
            <div class="container">
                <div class="row text-center">
                    <h1 className="text-center">Our Doctors</h1>

                    <div class="col-xl-3 col-sm-6 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <div class="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg" alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">ENT DOCTOR</span>
                            
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg" alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">Dermatalogist</span>
                           
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg" alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">Homeopathic</span>
                            
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://www.ankurahospitals.com/wp-content/uploads/2021/03/our-doctor-placeholder.jpg" alt="" width="100" class=" mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">Pedetrisian</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog" >
    <div class="modal-content" style={{width:'180%'}}>
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" >
        <Report/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        
    </div>
  )
}

export default Doctor