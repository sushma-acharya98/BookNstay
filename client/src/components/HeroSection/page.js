'use client'
import React from 'react';
import { useState } from 'react';
import DatePicker from "react-multi-date-picker"
const Page = () => {
  const [values, setValues] = useState([
  
])

          
  return (
    <div>
      <section>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-white-500 tracking-widest font-medium title-font mb-1">Find your next stay</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Search deals on hotels, homes, and much more...</h1>
            </div>
            <div class="hero-banner-searchbox">
            <form action="#" method="GET">
              <div class="flex items-center">
                
                <div class="w-full mr-4">
                    <label for="destination" class="sr-only">Where are you going?</label>
                    <input
                      id="destination"
                      name="ss"
                      class="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Where are you going?"
                      autocomplete="off"
                      aria-label="Where are you going?"
                      aria-expanded="false"
                      role="combobox"
                    />
                </div>
                <div class=" mr-4 w-full p-3 border rounded-md focus:outline-none focus:border-blue-500">
                    <DatePicker
                      value={values}
                      onChange={setValues}
                      range
                    />
     
                </div>
                <div className='w-full mr-4'>
                  <button data-testid="occupancy-config" aria-controls=":rh:" aria-expanded="false" type="button" class="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <span class="flex items-center space-x-2">
                          <span class="flex-shrink-0 h-6 w-6">
                              <svg class="h-full w-full text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"/></svg>
                          </span>
                          <span class="text-sm text-gray-700">2 adults · 0 children · 1 room</span>
                      </span>
                      <span class="flex-shrink-0 h-5 w-5 ml-2">
                          <svg class="h-full w-full text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.2681 8.91288C19.2687 9.03226 19.2454 9.15054 19.1996 9.26079C19.1539 9.37105 19.0865 9.47105 19.0016 9.55493L12.9445 15.612C12.8211 15.7367 12.6738 15.8353 12.5115 15.9018C12.3491 15.9684 12.1751 16.0017 11.9996 15.9997C11.6491 16.0075 11.3096 15.877 11.0547 15.6362L4.99764 9.57916C4.8275 9.40881 4.73193 9.17788 4.73193 8.93711C4.73193 8.69634 4.8275 8.46542 4.99764 8.29506C5.08117 8.20935 5.18101 8.14122 5.29128 8.09471C5.40155 8.04819 5.52002 8.02423 5.6397 8.02423C5.75937 8.02423 5.87784 8.04819 5.98811 8.09471C6.09838 8.14122 6.19822 8.20935 6.28175 8.29506L11.9996 13.9887L17.7175 8.27084C17.801 8.18512 17.9009 8.11699 18.0111 8.07048C18.1214 8.02396 18.2399 8 18.3596 8C18.4792 8 18.5977 8.02396 18.708 8.07048C18.8182 8.11699 18.9181 8.18512 19.0016 8.27084C19.0871 8.3543 19.1548 8.45422 19.2006 8.56457C19.2464 8.67492 19.2694 8.79341 19.2681 8.91288Z"/></svg>
                      </span>
                  </button>
                </div>
                <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 px-4 min-w-20 h-10 text-sm gap-2 rounded-md hover:bg-blue-600 bg-blue-500 text-white" role="button" tabindex="0">Search</button>

               
              </div>
            </form>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Page;
