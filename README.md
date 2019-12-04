# react-slider-measure

## Description

`react-slider-measure` is a customizable, pure JavaScript package, that provides a smooth user interface for picking a value within a measure styled bar.

### Demo

[Demo](https://react-slider-measure.now.sh/)

Also: see gatsby/pages folder. You can run it locally using [Gatsby](https://www.gatsbyjs.org/) just clone the repos and use `yarn start` in your CLI.

## Installation

| yarn | npm
| -------------------- | -------------------------------------- |
| yarn add react-slider-measure   | npm add react-slider-measure |

## Usage

```js
import React, { useState } from "react";
import { Slider } from "react-slider-measure";

const App = () => {
	const [value, setValue] =  useState(0);

	return (
		<div>
			<Slider
				activeColor="#5a2cc9"
				steps={100}
				value={value}
				onChange={setValue}
			/>
		</div>
	)
}
```

## API

| Props                      | Type           | Required    | Default                                                                                                    | Description                                                                                                         |
| --------------------------- | -------------- | ----------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| steps              | string         | true       | 40                                                                                                     | Defines the total numbers on the slider                                                      |
| value            | number        | true       |               -                                                                                        | Slider current value                                                                    |
| onChange                | function         | true       | -                                                                                                       | Retrieve the selected value from the slider                                                                       |
| activeColor | string | false       | #5a2cc9 | Active color for the selected value

## Crédits
Build at Igloo with [@loicmahieu](https://github.com/oicmahieu).
