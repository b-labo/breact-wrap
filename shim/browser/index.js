/**
 * Wrapper utility for breact
 * @module breact-wrap
 */

'use strict';

var d = function d(module) {
  return module && module.default || module;
};

module.exports = {
  get combine() {
    return d(require('./combine'));
  },
  get cycle() {
    return d(require('./cycle'));
  },
  get prefixOf() {
    return d(require('./prefix_of'));
  },
  get scoped() {
    return d(require('./scoped'));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImQiLCJtb2R1bGUiLCJkZWZhdWx0IiwiZXhwb3J0cyIsImNvbWJpbmUiLCJyZXF1aXJlIiwiY3ljbGUiLCJwcmVmaXhPZiIsInNjb3BlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBRUEsSUFBSUEsSUFBSSxTQUFKQSxDQUFJLENBQUNDLE1BQUQ7QUFBQSxTQUFZQSxVQUFVQSxPQUFPQyxPQUFqQixJQUE0QkQsTUFBeEM7QUFBQSxDQUFSOztBQUVBQSxPQUFPRSxPQUFQLEdBQWlCO0FBQ2YsTUFBSUMsT0FBSixHQUFlO0FBQUUsV0FBT0osRUFBRUssUUFBUSxXQUFSLENBQUYsQ0FBUDtBQUFnQyxHQURsQztBQUVmLE1BQUlDLEtBQUosR0FBYTtBQUFFLFdBQU9OLEVBQUVLLFFBQVEsU0FBUixDQUFGLENBQVA7QUFBOEIsR0FGOUI7QUFHZixNQUFJRSxRQUFKLEdBQWdCO0FBQUUsV0FBT1AsRUFBRUssUUFBUSxhQUFSLENBQUYsQ0FBUDtBQUFrQyxHQUhyQztBQUlmLE1BQUlHLE1BQUosR0FBYztBQUFFLFdBQU9SLEVBQUVLLFFBQVEsVUFBUixDQUFGLENBQVA7QUFBK0I7QUFKaEMsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXcmFwcGVyIHV0aWxpdHkgZm9yIGJyZWFjdFxuICogQG1vZHVsZSBicmVhY3Qtd3JhcFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5sZXQgZCA9IChtb2R1bGUpID0+IG1vZHVsZSAmJiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGVcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldCBjb21iaW5lICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9jb21iaW5lJykpIH0sXG4gIGdldCBjeWNsZSAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vY3ljbGUnKSkgfSxcbiAgZ2V0IHByZWZpeE9mICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9wcmVmaXhfb2YnKSkgfSxcbiAgZ2V0IHNjb3BlZCAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vc2NvcGVkJykpIH1cbn1cbiJdfQ==