import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-2">
          <img src={item.image} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text text-muted">${item.price}</p>
          </div>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            min="1"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, Number(e.target.value))}
          />
        </div>
        <div className="col-md-3 text-end pe-4">
          <button
            className="btn btn-danger"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
