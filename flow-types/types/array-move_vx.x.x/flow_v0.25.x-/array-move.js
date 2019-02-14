declare module "array-move" {
  declare export default typeof arrayMove;

  /**
   * Move an array item to a different position.
   * @param from Index of item to move. If negative, it will begin that many elements from the end.
   * @param to Index of where to move the item. If negative, it will begin that many elements from the end.
   * @returns A new array with the item moved to the new position.
   */
  declare function arrayMove<T: any[]>(input: T, from: number, to: number): T;

  declare var npm$namespace$arrayMove: {
    mut: typeof arrayMove$mut
  };

  /**
   * Moves the item to the new position in the input array.
   *
   * Useful for huge arrays where absolute performance is needed.
   * @param from Index of item to move. If negative, it will begin that many elements from the end.
   * @param to Index of where to move the item. If negative, it will begin that many elements from the end.
   */
  declare function arrayMove$mut(input: any[], from: number, to: number): void;
}
