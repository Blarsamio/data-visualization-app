require 'faker'

puts "Cleaning database..."
Metric.destroy_all
puts "Database cleaned!"


puts "Creating metrics..."
500.times do
  Metric.create!(
    date: Faker::Time.between(from: '2020-01-01', to: '2022-12-31'),
    value: Faker::Number.decimal(l_digits: 2, r_digits: 2),
    name: 'Napoleon'
  )
end
puts "#{Metric.count} metrics created!"
