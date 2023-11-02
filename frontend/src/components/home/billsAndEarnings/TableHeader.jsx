import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";

const TableHeader = ({
  mode,
  filter,
  handleFilterChange,
  searchTerm,
  handleSearch,
  selectedCategory,
  handleCategoryFilter,
  TABS,
  categories,
}) => {
  const titleSection = mode === "bill" ? "Gastos" : "Ingresos";

  return (
    <div className="rounded-none mt-3">
      <div className="mb-3 flex items-center justify-center gap-8">
        <Typography variant="h5" color="blue-gray">
          {titleSection}
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-around gap-4 md:flex-row">
        {mode === "bill" && (
          <Tabs value={filter} className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => handleFilterChange(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        )}
        <div className="w-full md:w-72">
          <Input label="Buscar" value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="fflex w-72 flex-col gap-6">
          <Select
            label="Categorías"
            size="md"
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e)}
          >
            <Option value="Todas">Todas</Option>
            {categories.map((category) => (
              <Option key={category.id} value={category.name}>
                {category?.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
