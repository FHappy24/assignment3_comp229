// src/components/EducationForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import EducationForm from './EducationForm';

test('submits education form with valid inputs', () => {
  const addEducationMock = jest.fn();

  render(<EducationForm onAddEducation={addEducationMock} />);

  fireEvent.change(screen.getByPlaceholderText(/School name/i), {
    target: { value: 'Centennial College' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Degree/i), {
    target: { value: 'Diploma' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Graduation year/i), {
    target: { value: '2025' },
  });

 fireEvent.click(screen.getByRole('button', { name: /Add Education/i }));

  expect(addEducationMock).toHaveBeenCalledWith({
    school: 'Centennial College',
    degree: 'Diploma',
    year: '2025',
  });
});
