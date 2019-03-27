'use strict'

import React from 'react'
import './index.sass'

export default function Feedback({ message, state }) {

    return (<section className={`feedback notification ${state}`} >{message}</section>)
}