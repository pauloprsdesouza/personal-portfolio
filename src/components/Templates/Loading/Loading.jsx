import React from 'react';

const Loading = function ({ loading }) {

    function showLoading() {
        return loading ? (
            <div className="text-center">
                <span><i className="fas fa-spinner fa-pulse"></i>&nbsp;Loading...</span>
            </div>
        ) : null;
    }

    return showLoading();
}

export default Loading;