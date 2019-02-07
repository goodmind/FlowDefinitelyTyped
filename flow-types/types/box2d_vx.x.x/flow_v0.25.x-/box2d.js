declare module "box2d" {
  /**
   * A 2D column vector with 3 elements.
   */
  declare export class Math$b2Vec3 {
    /**
     * x value.
     */
    x: number;

    /**
     * y value.
     */
    y: number;

    /**
     * z value.
     */
    z: number;

    /**
     * Construct using coordinates x,y,z.
     * @param x x value, default = 0.
     * @param y y value, default = 0.
     * @param z z value, default = 0.
     */
    constructor(x?: number, y?: number, z?: number): this;

    /**
     * Adds the vector 3 to this vector 3.  The result is stored in this vector 3.
     * @param v Vector 3 to add.
     */
    Add(v: Math$b2Vec3): void;

    /**
     * Creates a copy of the vector 3.
     * @return Copy of this vector 3.
     */
    Copy(): Math$b2Vec3;

    /**
     * Gets the negative of this vector 3.
     * @return Negative copy of this vector 3.
     */
    GetNegative(): Math$b2Vec3;

    /**
     * Vector multiplication.  Stores the result in this vector 3.
     * @param a Value to multiple the vector's values by.
     */
    Multiply(a: number): void;

    /**
     * Sets this vector 3 to its negative.
     */
    NegativeSelf(): void;

    /**
     * Sets the vector 3.
     * @param x x value, default is 0.
     * @param y y value, default is 0.
     * @param z z value, default is 0.
     */
    Set(x?: number, y?: number, z?: number): void;

    /**
     * Sets the vector 3 from a vector 3.
     * @param v Vector 3 to copy values from.
     */
    SetV(v: Math$b2Vec3): void;

    /**
     * Sets the vector 3 to zero values.
     */
    SetZero(): void;

    /**
     * Subtracts the vector 3 from this vector 3.  The result is stored in this vector 3.
     * @param v Vector 3 to subtract.
     */
    Subtract(v: Math$b2Vec3): void;
  }

  /**
   * A shape is used for collision detection. Shapes are created in b2Body. You can use shape for collision detection before they are attached to the world.
   * Warning: you cannot reuse shapes.
   */
  declare export class Shapes$b2Shape {
    /**
     * Return value for TestSegment indicating a hit.
     */
    static e_hitCollide: number;

    /**
     * Return value for TestSegment indicating a miss.
     */
    static e_missCollide: number;

    /**
     * Return value for TestSegment indicating that the segment starting point, p1, is already inside the shape.
     */
    static startsInsideCollide: number;
    static e_unknownShape: number;
    static e_circleShape: number;
    static e_polygonShape: number;
    static e_edgeShape: number;
    static e_shapeTypeCount: number;

    /**
     * Creates a new b2Shape.
     */
    constructor(): this;

    /**
     * Given a transform, compute the associated axis aligned bounding box for this shape.
     * @param aabb Calculated AABB, this argument is `out`.
     * @param xf Transform to calculate the AABB.
     */
    ComputeAABB(
      aabb: Collision$b2AABB,
      xf: Box2D$Box2D$Common.Math.Math$b2Transform
    ): void;

    /**
     * Compute the mass properties of this shape using its dimensions and density. The inertia tensor is computed about the local origin, not the centroid.
     * @param massData Calculate the mass, this argument is `out`.
     * @param density Density.
     */
    ComputeMass(massData: Shapes$b2MassData, density: number): void;

    /**
     * Compute the volume and centroid of this shape intersected with a half plane
     * @param normal The surface normal.
     * @param offset The surface offset along the normal.
     * @param xf The shape transform.
     * @param c The centroid, this argument is `out`.
     */
    ComputeSubmergedArea(
      normal: Box2D$Box2D$Common.Math.Math$b2Vec2,
      offset: number,
      xf: Box2D$Box2D$Common.Math.Math$b2Transform,
      c: Box2D$Box2D$Common.Math.Math$b2Vec2
    ): number;

    /**
     * Clone the shape.
     */
    Copy(): Shapes$b2Shape;

    /**
     * Get the type of this shape. You can use this to down cast to the concrete shape.
     */
    GetType(): number;

    /**
     * Cast a ray against this shape.
     * @param output Ray cast results, this argument is `out`.
     * @param input Ray cast input parameters.
     * @param transform The transform to be applied to the shape.
     * @param return True if the ray hits the shape, otherwise false.
     */
    RayCast(
      output: Collision$b2RayCastOutput,
      input: Collision$b2RayCastInput,
      transform: Box2D$Box2D$Common.Math.Math$b2Transform
    ): boolean;

    /**
     * Set the shape values from another shape.
     * @param other The other shape to copy values from.
     */
    Set(other: Shapes$b2Shape): void;

    /**
     * Test if two shapes overlap with the applied transforms.
     * @param shape1 shape to test for overlap with shape2.
     * @param transform1 shape1 transform to apply.
     * @param shape2 shape to test for overlap with shape1.
     * @param transform2 shape2 transform to apply.
     * @return True if shape1 and shape2 overlap, otherwise false.
     */
    static TestOverlap(
      shape1: Shapes$b2Shape,
      transform1: Box2D$Box2D$Common.Math.Math$b2Transform,
      shape2: Shapes$b2Shape,
      transform2: Box2D$Box2D$Common.Math.Math$b2Transform
    ): boolean;

    /**
     * Test a point for containment in this shape. This only works for convex shapes.
     * @param xf Shape world transform.
     * @param p Point to test against, in world coordinates.
     * @return True if the point is in this shape, otherwise false.
     */
    TestPoint(
      xf: Box2D$Box2D$Common.Math.Math$b2Transform,
      p: Box2D$Box2D$Common.Math.Math$b2Vec2
    ): boolean;
  }

  /**
   * Weld joint definition. You need to specify local anchor points where they are attached and the relative body angle. The position of the anchor points is important for computing the reaction torque.
   */
  declare export class Joints$b2WeldJointDef mixins Joints$b2JointDef {
    /**
     * The local anchor point relative to body1's origin.
     */
    localAnchorA: Box2D$Box2D$Common.Math.Math$b2Vec2;

    /**
     * The local anchor point relative to body2's origin.
     */
    localAnchorB: Box2D$Box2D$Common.Math.Math$b2Vec2;

    /**
     * The body2 angle minus body1 angle in the reference state (radians).
     */
    referenceAngle: number;

    /**
     * Constructor.
     */
    constructor(): this;

    /**
     * Initialize the bodies, anchors, axis, and reference angle using the world anchor and world axis.
     * @param bA Body A.
     * @param bB Body B.
     * @param anchor Anchor.
     */
    Initialize(
      bA: Dynamics$b2Body,
      bB: Dynamics$b2Body,
      anchor: Box2D$Box2D$Common.Math.Math$b2Vec2
    ): void;
  }
}
