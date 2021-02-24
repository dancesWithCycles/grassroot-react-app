/*
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return(
        <>
        <p>
        This grassroot app uses JSX and webpack as bundler to achieve a development environment and to provide an example configuration to build the app for production deployment.
        </p>
        <p><Link to="/">Home</Link></p>
        </>
    )
}

export default About;
