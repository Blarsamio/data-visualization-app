class Api::V1::MetricsController < ApplicationController
  def index
    @metrics = Metric.all
    render json: @metrics
  end

  def monthly_average
    monthly_average_query = <<-SQL
      SELECT
        DATE_TRUNC('month', date) AS month,
        AVG(value) AS avg,
        name
      FROM
        metrics
      GROUP BY
        DATE_TRUNC('month', date),
        name
      ORDER BY
        DATE_TRUNC('month', date) ASC
    SQL
    results = ActiveRecord::Base.connection.execute(monthly_average_query).to_a
    render json: results
  end

  def daily_average
    daily_average_query = <<-SQL
      SELECT
        to_char(date, 'ID') AS day,
        AVG(value) AS avg,
        name
      FROM
        metrics
      GROUP BY
        to_char(date, 'ID'),
        name
      ORDER BY
        to_char(date, 'ID') ASC
    SQL
    results = ActiveRecord::Base.connection.execute(daily_average_query).to_a
    render json: results
  end

  def yearly_average
    yearly_average_query = <<-SQL
      SELECT
        DATE_TRUNC('year', date),
        AVG(value),
        name
      FROM
        metrics
      GROUP BY
        DATE_TRUNC('year', date),
        name
      ORDER BY
        DATE_TRUNC('year', date) ASC
    SQL
    results = ActiveRecord::Base.connection.execute(yearly_average_query).to_a
    render json: results
  end
end
