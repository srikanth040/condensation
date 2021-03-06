var buildHelper = require('./_buildHelper');

module.exports.NAME = 'parameter';
module.exports.PARTICLE_NAME = 'parameter';
module.exports.PARTICLE_DIR = 'parameters';
module.exports.SECTION_NAME = 'Parameters';

/**
 * ```
 * - particles
 * |- parameters
 *  |- particle_name
 * ```
 *
 * @example
 * {{parameter "particle_name"}}
 * @example
 * {{parameter "particle_name" foo="bar"}}
 * @example
 * {{parameter "module:<MODULE>" 'particle_name'}}
 * @example
 * {{!-- to load modules with format `particles-NAME` --}}
 * {{parameter "m:<NAME>" "particle_name"}}
 * @memberof ParticleHelpers
 * @function parameter
 * @param {string} [module] - module to load with either `module:<MODULE>` or `m:<M>`
 * @param {string} path - Path to the particle (file extensions optional)
 * @param {...kv} [options] - Key/Value pairs to pass to the particle
 * @returns {string}
 */
module.exports.helper = buildHelper('parameter');

