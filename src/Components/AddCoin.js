import React from 'react'
import LiquidityCal from '../Functions/LiquidityCal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddCoin = () => {

    const handleAddClick =() =>
    {
     let test= LiquidityCal(2,10,"l",49);
    }


    
  return (
    <div className='container my-3'>
       <form>
  <div className="row mb-3">
    <label htmlFor="ticker" className="col-sm-2 col-form-label">Ticker</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="ticker"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="quantity"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="cp" className="col-sm-2 col-form-label">Cost Price</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="cp"/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Data refresh</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label className="form-check-label" htmlFor="gridRadios1">
          1 min
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="gridRadios2">
          5 min
        </label>
      </div>
    </div>
  </fieldset>
  <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleAddClick}>Add</Button>
      <Button variant="outlined" >Reset</Button>
    </Stack>
</form>
    </div>
  )
}

export default AddCoin
