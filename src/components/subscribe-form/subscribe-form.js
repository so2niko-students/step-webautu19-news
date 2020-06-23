import React from 'react';

import './subscribe-form.css';

function SubscribeForm(){
    return (
        <form>
          <div className="form-group">
            <label htmlFor="subscribe-email">Subscribe to news</label>
            <input
              type="email"
              className="form-control"
              id="subscribe-email"
              aria-describedby="email"
              placeholder="Email address"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
    );
}

export default SubscribeForm;