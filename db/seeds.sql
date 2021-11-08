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
  ('President/CEO', '250000', 1),
  ('Director of Sales', '175000', 2),
  ('Sales Manager', '100000', 2),
  ('Salesperson', '80000', 2),
  ('Director of Engineering', '180000', 3),
  ('Head Engineer', '125000', 3),
  ('Engineer', '80000', 3),
  ('Engineering Intern', '30000', 3),
  ('Director of Marketing', '125000', 4),
  ('Marketing Coordinator', '85000', 4),
  ('Marketing Intern', '30000', 4),
  ('Director of Lifestyle', '125000', 5),
  ('Content Creator', '65000', 5),
  ('Director of F&B', '95000', 6),
  ('Head Chef', '80000', 6),
  ('F&B Manager', '70000', 6),
  ('Cook', '45000', 6),
  ('Host', '35000', 6),
  ('Server', '20000', 6),
  ('Director of HR', '130000', 7),
  ('HR Coordinator', '75000', 7);

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
  
  
