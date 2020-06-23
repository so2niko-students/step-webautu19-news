import React from 'react';

import './subscribe-form.css';

function SubscribeForm(){
    return (
        <form>
          <div className="form-group">
            <label htmlFor="subscribe-email">Subscribe to news</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="subscribe-email"
              aria-describedby="email"
              placeholder="Email address"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-primary">
            Subscribe
          </button>
        </form>
    );
}

export default SubscribeForm;