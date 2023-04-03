class Acceleration extends Vector2 {
	constructor(x, y) {
		super(x, y);
	}

	// uses Newton's generalised second law F=ma to find new acceleration of object given its resultant force and mass (a = F/m)
	update(force, mass) {
		this.x = force.getX() / mass;
		this.y = force.getY() / mass;
	}
}
