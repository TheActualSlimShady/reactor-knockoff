;(function() {

window.parts = function() {
	return [
		// Cells
		{
			id: 'uranium1',
			type: 'uranium',
			level: 1,
			title: 'Uranium Cell',
			base_description: '%single_cell_description',
			category: 'cell',
			cell_count: 1,
			pulse_multiplier: 1,
			base_cost: 10,
			base_ticks: 15,
			base_power: 1,
			base_heat: 1,
			cell_tick_upgrade_cost: 100,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 500,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 1000
		},
		{
			id: 'uranium2',
			type: 'uranium',
			level: 2,
			title: 'Dual Uranium Cell',
			base_description: '%multi_cell_description',
			category: 'cell',
			cell_count: 2,
			pulse_multiplier: 1,
			base_cost: 25,
			base_ticks: 15,
			base_power: 4,
			base_heat: 8
		},
		{
			id: 'uranium3',
			type: 'uranium',
			level: 3,
			title: 'Quad Uranium Cell',
			base_description: '%multi_cell_description',
			category: 'cell',
			cell_count: 4,
			pulse_multiplier: 1,
			base_cost: 60,
			base_ticks: 15,
			base_power: 12,
			base_heat: 36
		},
		{
			id: 'plutonium',
			type: 'plutonium',
			levels: 3,
			title: 'Plutonium Cell',
			base_description: '%single_cell_description',
			category: 'cell',
			base_cost: 6000,
			base_ticks: 60,
			base_power: 150,
			base_heat: 150,
			cell_tick_upgrade_cost: 30000,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 30000,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 60000
		},
		{
			id: 'thorium',
			type: 'thorium',
			levels: 3,
			title: 'Thorium Cell',
			base_description: '%single_cell_description',
			category: 'cell',
			base_cost: 4700000,
			base_ticks: 900,
			base_power: 7400,
			base_heat: 7400,
			cell_tick_upgrade_cost: 25000000,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 25000000,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 50000000
		},
		{
			id: 'seaborgium',
			type: 'seaborgium',
			levels: 3,
			title: 'Seaborgium Cell',
			base_description: '%single_cell_description',
			category: 'cell',
			base_cost: 4000000000,
			base_ticks: 3600,
			base_power: 1600000,
			base_heat: 1600000,
			cell_tick_upgrade_cost: 20000000000,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 20000000000,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 40000000000
		},
		{
			id: 'dolorium',
			type: 'dolorium',
			levels: 3,
			title: 'Dolorium Cell',
			base_description: '%single_cell_description',
			category: 'cell',
			base_cost: 3900000000000,
			base_ticks: 22000,
			base_power: 230000000,
			base_heat: 230000000,
			cell_tick_upgrade_cost: 20000000000000,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 20000000000000,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 40000000000000
		},
		{
			id: 'nefastium',
			type: 'nefastium',
			levels: 3,
			title: 'Nefastium Cell',
			base_description: '%single_cell_description',
			category: 'cell',
			base_cost: 3600000000000000,
			base_ticks: 86000,
			base_power: 52000000000,
			base_heat: 52000000000,
			cell_tick_upgrade_cost: 17500000000000000,
			cell_tick_upgrade_multiplier: 10,
			cell_power_upgrade_cost: 17500000000000000,
			cell_power_upgrade_multiplier: 10,
			cell_perpetual_upgrade_cost: 35000000000000000
		},
		{
			id: 'protium',
			type: 'protium',
			levels: 3,
			title: 'Protium Cell',
			base_description: '%single_cell_description' + ' After being fully depleted, protium cells permanently generate 10% more power per depleted cell.',
			category: 'cell',
			experimental: true,
			erequires: 'protium_cells',
			base_cost: 3000000000000000,
			base_ticks: 3600,
			base_power: 1250000000000,
			base_heat: 1250000000000
		},

		// Energy
		{
			id: 'reflector',
			type: 'reflector',
			title: 'Neutron Reflector',
			base_description: 'Increases adjacent cell power output by %power_increase% for %ticks total pulses.',
			levels: 5,
			category: 'reflector',
			level: 1,
			base_cost: 500,
			cost_multiplier: 50,
			base_power_increase: 5,
			power_increase_add: 1,
			base_ticks: 100,
			ticks_multiplier: 2
		},
		{
			id: 'reflector6',
			type: 'reflector',
			title: 'Thermal Neutron Reflector',
			base_description: 'Increases adjacent cell power output by %power_increase% and heat output by %heat_increase% for %ticks total pulses.',
			category: 'reflector',
			experimental: true,
			erequires: 'heat_reflection',
			level: 6,
			base_cost: 100000000000000,
			base_power_increase: 5,
			base_heat_increase: 50,
			base_ticks: 3200
		},
		{
			id: 'capacitor',
			type: 'capacitor',
			title: 'Capacitor',
			base_description: 'Increases the maximum power of the reactor by %reactor_power. Holds a maximum of %containment heat.',
			levels: 5,
			category: 'capacitor',
			level: 1,
			base_cost: 1000,
			cost_multiplier: 160,
			base_reactor_power: 100,
			reactor_power_multiplier: 140,
			base_containment: 10,
			containment_multiplier: 5
		},
		{
			id: 'capacitor6',
			type: 'capacitor',
			title: 'Extreme Capacitor',
			base_description: 'Increases the maximum power of the reactor by %reactor_power. Holds a maximum of %containment heat. Heat is added to each unit equal to 50% of the power automatically sold by it.',
			category: 'capacitor',
			experimental: true,
			erequires: 'experimental_capacitance',
			level: 6,
			base_cost: 105000000000000,
			base_reactor_power: 2100000000000000,
			base_containment: 5400000000000
		},

		// Heat
		{
			id: 'vent',
			type: 'vent',
			title: 'Heat Vent',
			base_description: 'Lowers heat of itself by %vent per tick. Holds a maximum of %containment heat.',
			levels: 5,
			category: 'vent',
			level: 1,
			base_cost: 50,
			cost_multiplier: 250,
			base_containment: 80,
			containment_multiplier: 75,
			base_vent: 4,
			vent_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'vent6',
			type: 'vent',
			title: 'Extreme Vent',
			base_description: 'Lowers heat of itself by %vent per tick. Holds a maximum of %containment heat. Must consume power from the reactor at a rate of 100% of the heat removed from itself.',
			category: 'vent',
			experimental: true,
			erequires: 'vortex_cooling',
			level: 6,
			base_cost: 50000000000000,
			base_containment: 100000000000,
			base_vent: 5000000000,
		},
		{
			id: 'heat_exchanger',
			type: 'heat_exchanger',
			title: 'Heat Exchanger',
			base_description: 'Attempts to balance the heat between itself and adjacent components by percentage. Transfers up to %transfer heat per tick for each adjacent component. Holds up to %containment heat.',
			levels: 5,
			category: 'heat_exchanger',
			level: 1,
			base_cost: 160,
			cost_multiplier: 200,
			base_containment: 320,
			containment_multiplier: 75,
			base_transfer: 16,
			transfer_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'heat_exchanger6',
			type: 'heat_exchanger',
			title: 'Extreme Heat Exchanger',
			base_description: 'Attempts to balance the heat between itself, adjacent components and its entire row by percentage. Transfers up to %transfer heat per tick for each adjacent component. Holds up to %containment heat.',
			category: 'heat_exchanger',
			experimental: true,
			erequires: 'underground_heat_extraction',
			level: 6,
			base_cost: 50000000000000,
			base_containment: 1000000000000,
			base_transfer: 20000000000,
		},
		{
			id: 'heat_inlet',
			type: 'heat_inlet',
			title: 'Heat Inlet',
			base_description: 'Takes %transfer heat out of each adjacent component and puts it into the reactor each tick.',
			levels: 5,
			category: 'heat_inlet',
			level: 1,
			base_cost: 160,
			cost_multiplier: 200,
			base_transfer: 16,
			transfer_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'heat_inlet6',
			type: 'heat_inlet',
			title: 'Extreme Heat Inlet',
			base_description: 'Takes %transfer heat out of each adjacent component and puts it into the reactor each tick. Has a range of %range squares.',
			category: 'heat_inlet',
			experimental: true,
			erequires: 'vortex_extraction',
			base_range: 2,
			level: 6,
			base_cost: 50000000000000,
			base_transfer: 20000000000
		},
		{
			id: 'heat_outlet',
			type: 'heat_outlet',
			title: 'Heat Outlet',
			base_description: '%transfer heat is taken out of the reactor and put into each adjacent component.',
			levels: 5,
			category: 'heat_outlet',
			level: 1,
			base_cost: 160,
			cost_multiplier: 200,
			base_transfer: 16,
			transfer_multiplier: 75,
			location: 'cooling'
		},
		{
			id: 'heat_outlet6',
			type: 'heat_outlet',
			title: 'Extreme Heat Outlet',
			base_description: 'For each adjacent component %transfer is taken out of the reactor and put into the adjacent component. Has a range of %range squares.',
			category: 'heat_outlet',
			experimental: true,
			erequires: 'explosive_ejection',
			base_range: 2,
			level: 6,
			base_cost: 50000000000000,
			base_transfer: 20000000000
		},
		{
			id: 'coolant_cell',
			type: 'coolant_cell',
			title: 'Coolant Cell',
			base_description: 'Holds %containment heat before being destroyed.',
			levels: 5,
			category: 'coolant_cell',
			level: 1,
			base_cost: 500,
			cost_multiplier: 200,
			base_containment: 2000,
			containment_multiplier: 180,
			location: 'cooling'
		},
		{
			id: 'coolant_cell6',
			type: 'coolant_cell',
			title: 'Thermionic Coolant Cell',
			base_description: 'Holds %containment heat before being destroyed. 50% of the heat added to this part is instantly converted to power and added to the generator.',
			category: 'coolant_cell',
			experimental: true,
			erequires: 'thermionic_conversion',
			level: 6,
			base_cost: 160000000000000,
			base_containment: 380000000000000
		},
		{
			id: 'reactor_plating',
			type: 'reactor_plating',
			title: 'Reactor Plating',
			base_description: 'Increases maximum heat of the reactor by %reactor_heat.',
			levels: 5,
			category: 'reactor_plating',
			level: 1,
			base_cost: 1000,
			cost_multiplier: 160,
			base_reactor_heat: 100,
			reactor_heat_multiplier: 140,
			location: 'cooling'
		},
		{
			id: 'reactor_plating6',
			type: 'reactor_plating',
			title: 'Charged Reactor Plating',
			base_description: 'Increases maximum heat and power of the reactor by %reactor_heat.',
			category: 'reactor_plating',
			experimental: true,
			erequires: 'micro_capacitance',
			level: 6,
			base_cost: 100000000000000,
			base_reactor_heat: 8000000000000
		},
		{
			id: 'particle_accelerator',
			type: 'particle_accelerator',
			title: 'Particle Accelerator',
			base_description: 'Generates Exotic Particles based on heat passing through the accelerator (maximum %ep_heat). If this part explodes it causes instant reactor meltdown. Holds a maximum of %containment heat.',
			levels: 5,
			category: 'particle_accelerator',
			level: 1,
			base_cost: 1000000000000,
			cost_multiplier: 10000,
			base_containment: 100,
			containment_multiplier: 1000000,
			base_ep_heat: 500000000,
			ep_heat_multiplier: 20000,
			location: 'cooling'
		},
		{
			id: 'particle_accelerator6',
			type: 'particle_accelerator',
			title: 'Black Hole Particle Accelerator',
			base_description: 'Generates Exotic Particles based on heat passing through the accelerator (maximum %ep_heat). If this part explodes it causes instant reactor meltdown. Holds a maximum of %containment heat. Actively draws %transfer heat from the reactor at the cost of 1 power per 1 heat.',
			category: 'singularity_harnessing',
			experimental: true,
			erequires: '',
			level: 6,
			base_cost: 100000000000000,
			base_containment: 100000000000000000000000000000000,
			base_ep_heat: 1600000000000000000000000000000
		}
	];
};
})();
