class AddTitleToMetrics < ActiveRecord::Migration[7.0]
  def change
    add_column :metrics, :name, :string
    add_column :metrics, :value, :float
    add_column :metrics, :date, :datetime
  end
end
