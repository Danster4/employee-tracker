INSERT INTO department (name)
VALUES
  ('Executive'),
  ('Sales'),
  ('Engineering'),
  ('Marketing'),
  ('Lifestyle'),
  ('Food and Beverage'),
  ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
  ('President/CEO', '$250,000', 1),
  ('Director of Sales', '$175,000', 2),
  ('Sales Manager', '$100,000', 2),
  ('Salesperson', '$80,000', 2),
  ('Director of Engineering', '$180,000', 3),
  ('Head Engineer', '$125,000', 3),
  ('Engineer', '$80,000', 3),
  ('Engineering Intern', '$30,000', 3),
  ('Director of Marketing', '$125,000', 4),
  ('Marketing Coordinator', '$85,000', 4),
  ('Marketing Intern', '$30,000', 4),
  ('Director of Lifestyle', '$125,000', 5),
  ('Content Creator', '$65,000', 5),
  ('Director of F&B', '$95,000', 6),
  ('Head Chef', '$80,000', 6),
  ('F&B Manager', '$70,000', 6),
  ('Cook', '$45,000', 6),
  ('Host', '$35,000', 6),
  ('Server', '$20,000', 6),
  ('Director of HR', '$130,000', 7),
  ('HR Coordinator', '$75,000', 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Kiah', 'Stanley', 1, NULL),
  ('Ashton', 'Hassan', 2, 1),
  ('Adelina', 'Kearney', 3, 2),
  ('Joe', 'Martinez', 4, 3),
  ('Tyreece', 'Archer', 4, 3),
  ('Ayaan', 'Byrd', 5, 1),
  ('Kelan', 'Dickens', 6, 5),
  ('Alana', 'Whitehouse', 7, 6),
  ('Shona', 'West', 7, 6),
  ('Florrie', 'England', 8, 6),
  ('Izaak', 'Snider', 9, 1),
  ('Jay', 'Garza', 10, 9),
  ('Yu', 'Moran', 10, 9),
  ('Renae', 'Maddox', 11, 9),
  ('Sarah-Louise', 'Ball', 12, 1),
  ('Leon', 'Holding', 13, 12),
  ('Gareth', 'Morrow', 14, 1),
  ('Masuma', 'Ashley', 15, 14),
  ('Jaydn', 'Mcguire', 16, 14),
  ('Braiden', 'Cochran', 17, 15),
  ('Zayn', 'Frye', 17, 15),
  ('Conal', 'Scott', 18, 16),
  ('Robin', 'Lester', 19, 16),
  ('Jamaal', 'Sanderson', 19, 16),
  ('Tahla', 'Chung', 20, 1),
  ('Augustus', 'Wills', 21, 20);
  
  
