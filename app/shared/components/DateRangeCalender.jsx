"use client";
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import React, { useEffect, useRef } from 'react';

const DateRangeCalender = ({ selectedDates, setSelectedDates }) => {
    const hiddenDateInputRef = useRef(null);
    const calendarContainerRef = useRef(null);

    useEffect(() => {
        const datePicker = flatpickr(hiddenDateInputRef.current, {
            appendTo: calendarContainerRef.current,
            inline: true,
            mode: "range",
            minDate: "today",
            dateFormat: "YYYY-MM-DD",
            onChange: (selectedDates) => {
                setSelectedDates(selectedDates);
            },
        });

        return () => {
            datePicker.destroy();
        };
    }, [setSelectedDates]);

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
