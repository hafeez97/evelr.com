"use client";
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import React, { useEffect, useRef } from 'react';

const DateRangeCalender = () => {
    const hiddenDateInputRef = useRef(null);
    const calendarContainerRef = useRef(null);

    useEffect(() => {
        const datePicker = flatpickr(hiddenDateInputRef.current, {
            // dateFormat: 'Y-m-d',
            // minDate: 'today',
            appendTo: calendarContainerRef.current,
            inline: true,
            mode: "range",
            minDate: "today",
            dateFormat: "Y-m-d",
        });

        return () => {
            datePicker.destroy();
        };
    }, []);

    return (
        <div className="apartment-details-calendar">
            <input
                ref={hiddenDateInputRef}
                type="text"
                id="hiddenDateInput"
                style={{ display: 'none' }}
            />
            <div ref={calendarContainerRef} id="calendarContainer"></div>
        </div>
    );
};

export default DateRangeCalender;
