/** Change main color theme based on current biome. */
export const biomeThemeMain = (biome) => {
	switch (biome) {
		case 'ancient-forest':
			return 'theme-ancient_forest-main_background';
		case 'wildspire-waste':
			return 'theme-wildspire_waste-main_background';
		case 'coral-highlands':
			return 'theme-coral_highlands-main_background';
		case 'elders-recess':
			return 'theme-elders_recess-main_background';
		case 'caverns-of-el-dorado':
			return 'theme-caverns-main_background';
		case 'confluence-of-fates':
			return 'theme-confluence-main_background';
		case 'great-ravine':
			return 'theme-great_ravine-main_background';
		case 'guiding-lands':
			return 'theme-guiding_lands-main_background';
		case 'hoarfrost-reach':
			return 'theme-hoarfrost_reach-main_background';
		case 'rotten-vale':
			return 'theme-rotten_vale-main_background';
		case 'secluded-valley':
			return 'theme-secluded_valley-main_background';
		default:
			return 'theme-ancient_forest-main_background';
	}
};

/** Change section color theme based on current biome. */
export const biomeThemeSection = (biome) => {
	switch (biome) {
		case 'ancient-forest':
			return 'theme-ancient_forest-section_background';
		case 'wildspire-waste':
			return 'theme-wildspire_waste-section_background';
		case 'coral-highlands':
			return 'theme-coral_highlands-section_background';
		case 'elders-recess':
			return 'theme-elders_recess-section_background';
		case 'caverns-of-el-dorado':
			return 'theme-caverns-section_background';
		case 'confluence-of-fates':
			return 'theme-confluence-section_background';
		case 'great-ravine':
			return 'theme-great_ravine-section_background';
		case 'guiding-lands':
			return 'theme-guiding_lands-section_background';
		case 'hoarfrost-reach':
			return 'theme-hoarfrost_reach-section_background';
		case 'rotten-vale':
			return 'theme-rotten_vale-section_background';
		case 'secluded-valley':
			return 'theme-secluded_valley-section_background';
		default:
			return 'theme-ancient_forest-section_background';
	}
};

/** Change image color theme based on current biome. */
export const biomeThemeImage = (biome) => {
	switch (biome) {
		case 'ancient-forest':
			return 'theme-ancient_forest-image_background';
		case 'wildspire-waste':
			return 'theme-wildspire_waste-image_background';
		case 'coral-highlands':
			return 'theme-coral_highlands-image_background';
		case 'elders-recess':
			return 'theme-elders_recess-image_background';
		case 'caverns-of-el-dorado':
			return 'theme-caverns-image_background';
		case 'confluence-of-fates':
			return 'theme-confluence-image_background';
		case 'great-ravine':
			return 'theme-great_ravine-image_background';
		case 'guiding-lands':
			return 'theme-guiding_lands-image_background';
		case 'hoarfrost-reach':
			return 'theme-hoarfrost_reach-image_background';
		case 'rotten-vale':
			return 'theme-rotten_vale-image_background';
		case 'secluded-valley':
			return 'theme-secluded_valley-image_background';
		default:
			return 'theme-ancient_forest-image_background';
	}
};
