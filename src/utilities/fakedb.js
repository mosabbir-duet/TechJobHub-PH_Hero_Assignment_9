// use local storage to manage cart data

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const addToDb = id => {
    let appliedJobCart = getAppliedJob();
    // add quantity
    const quantity = appliedJobCart[id];
    if (!quantity) {
        appliedJobCart[id] = 1;
    }
    else {
        toast("Already applied this job!!!")

    }
    localStorage.setItem('appliedJob-cart', JSON.stringify(appliedJobCart));
}

const removeFromDb = id => {
    const appliedJobCart = getAppliedJob();
    if (id in appliedJobCart) {
        delete appliedJobCart[id];
        localStorage.setItem('appliedJob-cart', JSON.stringify(appliedJobCart));
    }
}

const getAppliedJob = () => {
    let appliedJobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('appliedJob-cart');
    if (storedCart) {
        appliedJobCart = JSON.parse(storedCart);
    }
    return appliedJobCart;
}

const deleteAppliedJob = () => {
    localStorage.removeItem('appliedJob-cart');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteAppliedJob
};

