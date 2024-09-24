import { FaPlus } from "react-icons/fa";
import "./createOffer.scss";

export default function CreateOfferImages() {
  return (
    <div className="createOffer__form__images">
      <ul>
        <li className="add__button">
          <FaPlus />
        </li>
        {imagecon.map((item, id) => (
          <li key={id}>
            <img src={item} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const imagecon = [
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
];
