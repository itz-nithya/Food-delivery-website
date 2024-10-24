import '../css/Collections.css';
import img1 from "../assets/images/collectionimg-1.avif";
import img2 from "../assets/images/image-3.avif";
import img3 from "../assets/images/image-7.jpg";
import img4 from "../assets/images/image-6.jpg";
export function Collections() {
    return (
        <>
            <div className='parent'>
                <h1 className='flex-start'>Collections</h1>

                <div>Explore curated lists of top restaurants, cafes, pubs and bars in Chennai, based on trends
                    <span className="text">All collections in Chennai<div class="btn-group dropend">
                        <button type="button" class="btn btn-light dropdown-toggle"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></span>
                </div>
            </div>
           
            <div className='container'>
                <div className='row imgparent'>
                <div className='col-md-3 img'>
                    <img src={img1}/>
                    <div className='text-2'><div>Newly Opened Places</div>
                    <div style={{fontSize:"15px"}}>17 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div>
                <div className='img'>
                    <img src={img2}/>
                    <div className='text-2'><div>Top trending spots</div>
                    <div style={{fontSize:"15px"}}>39 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div> <div className='img'>
                    <img src={img3}/>
                    <div className='text-2'><div>Best insta worthy places</div>
                    <div style={{fontSize:"15px"}}>17 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div> <div className='img'>
                    <img src={img4}/>
                    <div className='text-2'><div>South indian special</div>
                    <div style={{fontSize:"15px"}}>37 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}