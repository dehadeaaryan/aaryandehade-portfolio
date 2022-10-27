
import 'bootstrap/dist/css/bootstrap.css'

export default function Lim() {
    return (
        <div style={{background : "grey", height : "100vh"}}>

            <div className="container">
                <form>
                <div className="mb-3">
                    <label htmlFor="equation" className="form-label">Equation</label>
                    <input type="email" className="form-control" id="equation"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">lim x -{'>'} ?</label>
                    <select type="password" className="form-control" id="exampleInputPassword1">
                        <option>1</option>
                        <option>0</option>
                        <option>∞</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        
        </div>
    )
}