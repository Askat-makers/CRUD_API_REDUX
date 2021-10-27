import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deleteUser, getUser } from "../actions/userActions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(getUser(params.id));
  }, []);
  const handleDelete = () => {
    dispatch(deleteUser(user.id, toast));
    history.push("/");
  };
  return (
    <div className="container mt-5">
      <div className="mb-5">
        <Link to="/">
          <Button className="btn-success">Main page</Button>
        </Link>
      </div>
      {user ? (
        <>
          <ul className="user-info-list">
            <li>
              <strong className="key">First name</strong>
              <span className="value">{user.first_name}</span>
            </li>
            <li>
              <strong className="key">Last name</strong>
              <span className="value">{user.last_name}</span>
            </li>
            <li>
              <strong className="key">DOB</strong>
              <span className="value">{user.birth_date}</span>
            </li>
            <li>
              <strong className="key">Gender</strong>
              <span className="value">{user.gender}</span>
            </li>
            <li>
              <strong className="key">Job</strong>
              <span className="value">{user.job}</span>
            </li>
            <li>
              <strong className="key">Is active</strong>
              <span className="value">{user.is_active ? "Yes" : "No"}</span>
            </li>
            <li>
              <strong className="key">Biography</strong>
              <span className="value">{user.biography}</span>
            </li>
          </ul>
          <div>
            <Button
              className="btn-danger"
              onClick={handleDelete}
              style={{ marginRight: 10 }}
            >
              Delete
            </Button>
            <Link to={`/edit/${user.id}`}>
              <Button>Edit</Button>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DetailPage;
