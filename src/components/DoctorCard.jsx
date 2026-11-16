function DoctorCard({ doctor, onSave, isSaved }) {
  return (
    <div className="card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.department}</p>
      <p>{doctor.specialty}</p>
      <button onClick={() => onSave(doctor)}>
        {isSaved ? "★ Saved" : "☆ Save"}
      </button>
    </div>
  );
}
export default DoctorCard;